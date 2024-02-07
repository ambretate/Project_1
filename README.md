# Chasing Sunlight

## Description
As someone who enjoys exercising and spending time outdoors, I've often found it challenging balancing work and ensuring I actually get out the door before the last bit of sunlight is gone. This issue is compounded during the late fall and winter months.

While there are multiple resources to look up sunrise and sunset times for a location, most of these tack it on as an afterthought. It usually appears listed in a chart at the bottom of a weather report or buried deep in multiple lines looking at a full month view of times.

The goal of the Chasing Sunlight site is to display first light, last light, and other marked times in a bold, graphical way that makes it easy to tell at a glance how much sunlight is left (or how long until it's back).

## Wireframes
<img src='/https://github.com/ambretate/Project_1/blob/main/resources/images/IMG_4596.png'>

## APIs
- [Sunrise and sunset times API](https://sunrise-sunset.org/api) by Sunrise-Sunset
- [Geocoding API](https://api-ninjas.com/api/geocoding) by API Ninjas

## MVP
The MVP will take a city input by name and using the Geocoding API convert it to latitude and longitude coordinates.

The latitude and longitude coordinates will be passed to the Sunrise and sunset times API and output the times for the following:
- Astronomical twilight begins
- Nautical twilight begins
- Civil twilight begins
- Sunrise
- Solar noon
- Sunset 
- Civil twilight ends
- Nautical twilight ends
- Astronomical twilight ends

The most prominent area of the screen will output first light (astronomical twilight begins) or last light (astronomical twilight ends), depending on which event occurs next. This area will have a background color that reflects the current time phase (sky blue for solar noon, dark blue for night, sunrise or sunset colors based off current phase).

A less prominent portion of the screen will output submitted city and the full list of times above.


## Post-MVP

- Most prominent area:
    - Background color will be a gradient instead of solid color, and will transition with times of day
    - An hours until first light/last light counter will appear at the bottom of this area.
        - If counting down to last light, the last 60 minutes will be emphasized with red text.
- Browser will have added capability to pull current location and not require city input
- Desktop and tablet views will provide definitions of each time of day on hover.
- A date search will allow users to view days other than today.