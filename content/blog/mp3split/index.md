---
title: "mp3split: a simple shell script for splitting mp3 audio files"
date: 2020-09-13
lastmod: ""
description: "mp3split simple shell script for splitting mp3 audio files"
author: "Diego Sánchez"
draft: false
categories: ["Linux"]
ogtype: article
image:
  url: "https://diegosanchezp.github.io/blog/mp3split/mp3splitBanner.png"
  alt: "mp3split banner"
---

{{< figure src="/blog/mp3split/mp3splitBanner.png" alt="mp3split banner" >}}
## Introduction

Downloading mp3 files these days or converting a music video to an mp3 file for later offline playback hasn't been easier these days with programs like [youtube-dl](https://rg3.github.io/youtube-dl/) and other alike.

For example if you liked a music mix in youtube, lets say, a '[syntwave mix][1]' for your programming sessions and you have downloaded it with one the programs mentioned above, you now have a single mp3 file. But what happens if you didn't like a song in the mix ? Well at first you might think you can't do anything about it, because how you do delete that one annoying song and keep the rest ?

The solution to that problem is to split the single mp3 file into many more mp3 files and of course delete the one you don't want to keep.

To begin splitting the mp3 file we would need the time where each song starts i.e timestamps. Many of those music mixes found in youtube give in the video description a 'tracklist' which is primarily compose of a timestamp and the name of the song.

For example, the one found in the [syntwave mix][1]

```
0:00 Xtract - Audiotool Day 2016
3:55 Alison - space echo
7:25 Volt Age - Volt's Theme 
13:12 Lucy in Disguise - Southbound 
18:05 Lucy in Disguise - Echoes In Time
23:15 HOME - Flood
26:53 De Lorra/Augustus Wright - Let Us 
31:09 bl00dwave - Encounters
33:51 Emil Rottmayer - T.I.M.E ( Part 2 )
40:12 oDDling - Early Bird
43:22 hello meteor - at last light
```

We could do the splitting manually with ffmpeg, but it would take a lot of time. Today I present to you `mp3split` a simple shell script to aid you in the process of splitting large mp3 files with the help of tracklist and a single dependency `ffmpeg`.

## Usage example
To get started, install the script running the following commands.

```bash
wget https://raw.githubusercontent.com/diegosanchezp/mp3split/master/mp3split.sh -O ~/.local/bin/mp3split && chmod 755 ~/.local/bin/mp3split
```

This will put the shell script in the folder `~/.local/bin/` and can be accessed via terminal as a binary file.

Run `mp3split -h` to test if the program is installed.

The script takes as input an mp3 file and a tracklist like the one above.

To walk you trough the usage I have downloaded the [syntwave mix][1] with `youtube-dl`, rename it to `testsong.mp3` and put the tracklist in a text file named `tracklist.txt`.

If you want to split `testsong.mp3` automatically, run

```bash
mp3split testsong.mp3 tracklist.txt
```

It will output information about the created split files to `stdout`

```
=== Begin to create mp3 split files ===
Processed 0:00 to 3:55; Xtract - Audiotool Day 2016.mp3
Processed 3:55 to 7:25; Alison - space echo.mp3
Processed 7:25 to 13:12; Volt Age - Volt's Theme.mp3
Processed 13:12 to 18:05; Lucy in Disguise - Southbound.mp3
Processed 18:05 to 23:15; Lucy in Disguise - Echoes In Time.mp3
Processed 23:15 to 26:53; HOME - Flood.mp3
De Lorra/Augustus Wright - Let Us.mp3: No such file or directory
Processed 26:53 to 31:09; De Lorra/Augustus Wright - Let Us.mp3
Processed 31:09 to 33:51; bl00dwave - Encounters.mp3
Processed 33:51 to 40:12; Emil Rottmayer - T.I.M.E ( Part 2 ).mp3
Processed 40:12 to 43:22; oDDling - Early Bird.mp3
Processed 43:22 to 0:45:55.680000; hello meteor - at last light.mp3
```

Let's list what files have created it.

```
3,1M	Alison - space echo.mp3
2,4M	bl00dwave - Encounters.mp3
5,8M	Emil Rottmayer - T.I.M.E ( Part 2 ).mp3
1,5M	hello meteor - at last light.mp3
3,4M	HOME - Flood.mp3
4,9M	Lucy in Disguise - Echoes In Time.mp3
5,2M	Lucy in Disguise - Southbound.mp3
3,1M	oDDling - Early Bird.mp3
5,3M	Volt Age - Volt's Theme.mp3
3,5M	Xtract - Audiotool Day 2016.mp3
```

As you can see a file is missing `De Lorra/Augustus Wright`

`ffmpeg` throws the following error.

```
De Lorra/Augustus Wright - Let Us.mp3: No such file or directory
```

What happened here? `ffmpeg` the program that helps to create the splits, interpreted the filename as directory followed by a name, you might want to fix it by substituting the `/` by a another character.

To end the article, I'd have to say that you could also apply this idea of splitting with audio books.

Thanks for reading.

## Useful links

[Source code repository with detailed documentation](https://github.com/diegosanchezp/mp3split/)

[1]: https://www.youtube.com/watch?v=WI4-HUn8dFc

