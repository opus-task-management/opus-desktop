// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::{
    fs::{self, File},
    io::Write,
    path::Path,
};

use crate::config::OpusConfig;

mod config;

fn main() {
    let config = load_config();
    match config.unwrap().storage {
        config::StorageConfig::File(file_config) => println!("{}", file_config.folder),
    }
    opus_desktop_lib::run()
}

fn load_config() -> Option<OpusConfig> {
    let candidates = ["opus.config.yml", "opus.config.yaml", "opus.config.json"];
    let config_path = candidates.iter().map(Path::new).find(|p| p.exists());

    match config_path {
        Some(path) => {
            let content = fs::read_to_string(path).ok()?;
            let config = if path.extension().is_some_and(|e| e == "yaml" || e == "yml") {
                serde_yaml::from_str(&content).expect("Error parsing yaml file")
            } else {
                serde_json::from_str(&content).expect("Error parsing json file")
            };
            config
        }
        None => {
            let opus_config = OpusConfig::create_default();
            let json_data = serde_json::to_string(&opus_config).unwrap();
            let mut file = File::create(candidates[2]).expect("Cannot create file");
            file.write_all(json_data.as_bytes())
                .expect("Failed to write default config to file");
            Some(opus_config)
        }
    }
}
