# Node School Vancouver

This is our static site generator, powered by [gatsby](https://www.gatsbyjs.org)

## Attendees

Want a simple pull request? Add yourself to the data/attendees/ directory. Create a new yaml file with your name, with the following content:

```
---
name: Name
github: <github id>
twitter: <optional twitter id>
```

When in doubt, look at other people in that directory

## Mentors

If you want to help teach or contribute in anyway, Add yourself to the data/mentors/ directory. Create a new yaml file with your name, with the following content:

```
---
name: Name
github: <github id>
twitter: <optional twitter id>
```

We usually like mentors to have come to a session before, and read up on the https://github.com/nodeschool/organizers/wiki/Event-Mentor-Best-Practices#on-being-a-mentor section on the nodeschool wiki.

## Sponsors

Any sponsors can be added to the data/sponsors/ directory. Create a new yaml file with the name of the sponsor name, with the following content:

```
---
name: $Name
logo: $relativePathToLogo.png
link: $URL
```

# Template

This is heavily based off the nodeschool toronto template. It used jekyll which when I tried it wouldn't compile properly, and as a node group, figured all node was better.

## Install all dependencies

```
npm install
```

## Local Development

```
npm run dev
```

This should start gatsby on port 3000

## Configuration

Everything for your nodeschool event should be managed in the data/ directory


    data
    ├── mentors
    ├── attendees
    ├── photos
    ├── sponsors
    ├── config.js

1.  **`/data/mentors`**: This contains a list of your mentors. One yaml file per mentor. Icons are taken from github

2.  **`/data/attendees`**: This contains a list of any attendees that want to show themselves as part of the community.

3.  **`/data/photos`**: Your events photos.

4.  **`/data/sponsors`**: Your events sponsors.

5.  **`config.js`**: Your main configuration file, all your chapter's specific information should go here

## 💫 Deploy

```
npm run deploy:github
```

This will deploy your site to your gh-pages branch of the current repository

