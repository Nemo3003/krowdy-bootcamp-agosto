#!/bin/bash
mysql -u root -pmypassword --execute "CREATE DATABASE IF NOT EXISTS mydatabase;"
mysql -u root -pmypassword mydatabase < /home/db.sql    