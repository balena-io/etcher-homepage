---

title: Port Mapping
order: 2

---

## Device mapping

![Fin mapping top](/assets/mapping_top.png)

![Fin mapping bottom](/assets/mapping_bottom.png)

| **#** | **Name** | **Notes/Description** |
| --- | --- | --- |
| 1 | 5V Status LED | Indicates 5V current flow. |
| 2 | 3V3 Status LED | Indicates 3.3V current flow. This is the same as the red LED on the Raspberry Pi 3 Model B |
| 3 | ACT Status LED | CM3L Activity LED. This is the same as the green LED on the Raspberry Pi 3 Model B |
| 4 | SPD Status LED | Ethernet Speed LED. off when in 10-Mbps mode, on when in 100-Mbps mode |
| 5 | FDX Status LED | Ethernet Full-Duplex indicator |
| 6 | LNK Status LED | Ethernet Link/Activity LED. |
| 7 | PAN Status LED | If supported by the mPCIE (32) card connected, indicates PAN network activity |
| 8 | LAN Status LED | If supported by the mPCIE (32) card connected, indicates LAN network activity |
| 9 | WAN Status LED | If supported by the mPCIE (32) card connected, indicates WAN network activity |
| 10 | DSI connector | Standard full-size Raspberry Pi Display connector |
| 11 | HDMI | Full-size HDMI Type A with CEC support |
| 12 | CSI connector | Standard full-size Raspberry Pi Camera connector |
| 13 | HAT connector | 40-pin Raspberry Pi HAT (Hardware Attached on Top) standard connector |
| 14 | WiFi/BT combo chip | 802.11ac/a/b/g/n 2.4 &amp; 5GHz WiFi + Bluetooth 4.2 |
| 15 | WiFi/BT uFL antenna connector | If the RF switch is set on the external position, the antenna attached to this connector will become the main Radio antenna for the WiFi/BT combo chip (14) |
| 16 | WiFi/BT embedded antenna | Embedded high-performance SMD antenna covering both 2.4 and 5GHz frequencies. It is the default antenna selected for the WiFi/BT combo chip (14) |
| 17 | Co-processor | Artik020 MCU |
| 18 | USB1 ON Status LED | The green LED stays on as long as there is enough current flowing on the top USB port. When this LED is off, it means a fault or under-voltage is happening on the top USB port |
| 19 | USB | 2 x USB Type-A |
| 20 | USB2 ON Status LED | The green LED stays on as long as there is enough current flowing on the bottom USB port. When this LED is off, it means a fault or under-voltage is happening on the bottom USB port |
| 21 | Ethernet | 10/100 ethernet RJ45 connector |
| 22 | DBG - Programming port | micro-USB connector that allows to flash the eMMC from a host computer using etcher.io or usbboot. If the device is powered on while there is a cable connected to this port, it will enter a programming mode exposing its eMMC as mass-storage to a host computer (via etcher.io or usbboot) |
| 23 | 2-POS Phoenix connector | 6-24V input power. This is a Industry standard connector. _Use either this or the Barrel Jack connector (24) - never both at the same time!_ |
| 24 | 2.1 / 5.5 mm Barrel Jack connector | 6-24V input power. _Use either this or the Phoenix connector (23) - never both at the same time!_ |
| 25 | Co-Processor I/O connector | 8 x GPIO / ADC, 1 x SPI, 1 x I2C, 1 x Debug UART |
| 26 | CR122 RTC coin-cell battery socket | This allows the embedded RTC to keep track of time while the device is powered off. |
| 27 | RGB LED |   |
| 28 | RESET push-button | When pressed (and released) DS1307 reboots the CM3L (30) |
| 29 | nano-SIM socket | This allows the use of a wide portfolio of cellular Modems via the mPCIE socket (32) |
| 30 | CM3L socket | SODIMM-200 socket for the Raspberry Pi Compute Module 3 Lite |
| 31 | eMMC | 8/16/32/64 GB class 5.1 industrial eMMC - main storage for the CM3L (30). Positioned under the CM3L (30) |
| 32 | mPCIE | Mini PCI express socket |
| 33 | Antenna switch | 2 position switch - when set to OFF, the WiFi/BT combo chip (14) uses the WiFi/BT embedded antenna (16). When set to ON, the WiFi/BT combo chip (14) uses the WiFi/BT uFL antenna connector (15) |
