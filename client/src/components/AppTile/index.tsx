import React from "react";
import { Button, Tooltip } from "@mui/material";
import "./AppTile.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom";

export interface AppTileProps {
  app: AppTileData;
}

export interface AppTileData {
  icon: string;
  link: string;
  title: string;
  color: string;
  description: string;
}

const AppTile: React.FC<AppTileProps> = ({ app }) => {
  const { icon, link, title, color, description } = app;
  return (
    <Link to={link}>
      <Tooltip title={description} arrow >

      <Button
        variant="outlined"
        className="app-tile"
        fullWidth
        startIcon={
          <FontAwesomeIcon
          icon={(Icons as unknown as Record<string, IconProp>)[icon]}
          />
        }
        >
        {title}
      </Button>
        </Tooltip>
    </Link>
  );
};

export default AppTile;
