#!/bin/sh
exec gunicorn -b "${BIND_HOST:-0.0.0.0}:${BIND_PORT:-8000}" main:app