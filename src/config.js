class Config {
    static getCurrent(){
        return this.getAllEnvironmentConfigs()[NoughtsAndCrosses.Environment.get()]
    }

    static getAllEnvironmentConfigs(){
        return {
            appRoot: "https://localhost:9002",
        }
    }
}