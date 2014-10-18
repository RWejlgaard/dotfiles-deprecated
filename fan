#!/bin/bash
echo "1" > /sys/devices/platform/applesmc.768/fan2_manual
echo "2500" > /sys/devices/platform/applesmc.768/fan2_output
xrandr --output DisplayPort-0 --left-of eDP
xrandr --output DisplayPort-0 --primary
xrandr --output DisplayPort-0 --preferred
