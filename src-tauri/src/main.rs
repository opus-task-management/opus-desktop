// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use crate::config::OpusConfig;

mod config;

fn main() {
    let config = OpusConfig::load().expect("Cannot load config");
    match config.storage {
        config::StorageConfig::File(file_config) => println!("{}", file_config.folder),
    }
    opus_desktop_lib::run()
}
