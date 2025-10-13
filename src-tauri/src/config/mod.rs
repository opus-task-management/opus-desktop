use serde::{Deserialize, Serialize};

pub use file::FileConfig;

pub mod file;

#[derive(Debug, Serialize, Deserialize)]
#[serde(tag = "type")]
pub enum StorageConfig {
    #[serde(rename = "file")]
    File(FileConfig),
}

#[derive(Debug, Serialize, Deserialize)]
pub struct OpusConfig {
    pub storage: StorageConfig,
}

impl OpusConfig {
    pub fn create_default() -> Self {
        Self {
            storage: StorageConfig::File(FileConfig {
                folder: "./opus".to_string(),
            }),
        }
    }
}
