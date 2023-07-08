import os
from pathlib import Path

APP_ENV = os.getenv("APP_ENV", "production")

STATIC_DIR = Path("../client/dist")
