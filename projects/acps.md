## Adaptive Corrosion Protection System

I worked on this project as a Research Assistant at the
[Centre for Integrative Bio-Engineering Research (CIBER)](https://ciber.fas.sfu.ca/),
a lab in SFU's Faculty of Applied Sciences headed by Prof. Bozena Kaminska.
The goal of the project was to develop a corrosion protection system using cathodic protection.
It would measure soil conditions, calculate protection current and corrosion rate and supply protection voltage.

We forked an open-source project, [DStat](http://microfluidics.utoronto.ca/gitlab/dstat/dstat-interface),
that some researchers at University of Toronto had been developing.
I worked on the GUI that would interface with the hardware module over serial USB.

<img src="/projects/images/acps.jpg" alt="ACPS hardware" width="500"/>

Our fork grew considerably different from the original DStat as our requirements evolved.
We soon realized the need to create a new program to better suit our needs.
It needed to be very lightweight, efficient and reliable.
The system consisted of three major components: software interface, firmware and hardware.
I was responsible for the software interface which I implemented in Python with Tkinter.
