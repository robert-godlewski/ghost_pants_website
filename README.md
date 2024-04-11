# Description
This is mainly a blog website that talks a lot about games and tv shows.  The name is called Ghost Pants because that's what Blizzard's account called it as.

## Needs for the project
- [ ] Blog Posts can read markdown files for description details
- [ ] Others can comment of Blog Posts (we don't need complex relations here so a RDBMS will do)
- [ ] Rankings per game (Utilizing a separate fields?)
- [ ] Can search and organize by genre and category (Utilizing a separate class)
- [ ] Can do a general search - [Tutorial reference](https://www.youtube.com/watch?v=AGtae4L5BbI) (no need for a Search Engine DBMS)
- [ ] Basic Styling and UI
- [ ] Get admin to work as an official user

# Technology Used
This is a list of technologies used to build up the website.

## Programming Languages
1. JavaScript, HTML, CSS, Bootstrap, jQuery(?)
2. Python and Django

Will need JavaScript, HTML, and CSS because that's just basic Web Development needs.  Generally will use Bootstrap for some specific styling stuff.  Might use jQuery for specific UI stuff if Bootstrap is not able to handle it - [Django-jQuery setup](https://stackoverflow.com/questions/12031825/how-to-set-up-django-website-with-jquery).  We are skipping TypeScript and React.

We will use Python and Django for this project because Django is great for blogs.

## Database
We will stick with a Relational Database Management System.  Specifically we will be using PostgreSQL due to being free and open source as well as the ability to handle complex data.  We will start out with SQLite though to start out with though.
