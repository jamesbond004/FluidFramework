import { Provider } from "nconf";
import * as winston from "winston";
import { Deferred } from "../core-utils";
import * as utils from "../utils";
import { IPartitionLambdaFactory } from "./lambdas";
import { PartitionManager } from "./partitionManager";

export class KafkaRunner implements utils.IRunner {
    private deferred: Deferred<void>;
    private partitionManager: PartitionManager;

    constructor(
        factory: IPartitionLambdaFactory,
        private consumer: utils.kafkaConsumer.IConsumer,
        config: Provider) {

        this.partitionManager = new PartitionManager(factory, consumer, config);

        // TODO need to register for events on the manager - mostly close events which should trigger
        // us to restart
    }

    public start(): Promise<void> {
        this.deferred = new Deferred<void>();

        // Place new Kafka messages into our processing queue
        this.consumer.on("data", (message) => {
            this.partitionManager.process(message);
        });

        // On any Kafka errors immediately stop processing
        this.consumer.on("error", (err) => {
            this.consumer.close();
            this.deferred.reject(err);
        });

        return this.deferred.promise;
    }

    /**
     * Signals to stop the service
     */
    public async stop(): Promise<void> {
        winston.info("Stop requested");

        // stop listening for new updates
        this.consumer.pause();

        // Mark ourselves done once the topic manager has stopped processing
        this.partitionManager.stop().then(
            () => {
                this.deferred.resolve();
            },
            (error) => {
                this.deferred.reject(error);
            });

        return this.deferred.promise;
    }
}
