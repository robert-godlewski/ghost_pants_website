# Description
This is mainly a blog website that talks a lot about games and tv shows.  The name is called Ghost Pants because that's what Blizzard's account called it as.

## Needs for the project
- [ ] Implement features from [Tim's Tutorial](https://www.youtube.com/watch?v=c-QsfbznSXI) to serialize Django and React as the UI
- [ ] Blog Posts can read markdown files for description details or have a text editor in them
- [ ] Others can comment of Blog Posts (we don't need complex relations here so a RDBMS will do)
- [ ] Rankings per game (Utilizing a separate fields?)
- [ ] Can search and organize by genre and category (Utilizing a separate class)
- [ ] Can do a general search - [Tutorial reference](https://www.youtube.com/watch?v=AGtae4L5BbI) (no need for a Search Engine DBMS)
- [ ] Basic Styling and UI - React (Serialize with React)
- [ ] Get admin to work as an official user
- [ ] Setup Docker container for Nginx and Gunicorn (Maybe?) for webhosting and deployment
- [ ] Setup and choose a Cloud Service Provider

# Technology Used
This is a list of technologies used to build up the website.

[<img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python logo" height="50">](https://www.python.org/) [<img src="https://static.djangoproject.com/img/logos/django-logo-negative.png" alt="Django logo" height="50">](https://www.djangoproject.com/)

Will need to add in:

[<img src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg" alt="HTML5 logo" height="50">](https://html.spec.whatwg.org/) [<img src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" alt="CSS3 logo" height="50">](https://www.w3.org/TR/CSS/) [<img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript logo" height="50">](https://ecma-international.org/publications-and-standards/standards/ecma-262/) [<img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" alt="Bootstrap Logo" height="50">](https://getbootstrap.com/) [<img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/JQuery-Logo.svg" alt="jQuery Logo" height="50">](https://jquery.com/) [<img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" alt="PostgreSQL Logo" height="50">](https://www.postgresql.org/) [<img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Nginx_logo.svg" alt="Nginx Logo" height="50">](https://www.nginx.com/) [<img src="https://upload.wikimedia.org/wikipedia/commons/0/00/Gunicorn_logo_2010.svg" alt="Gunicorn Logo" height="50">](https://gunicorn.org/) [<img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" alt="Docker Logo" height="50">](https://www.docker.com/)

* GCP/ DigitalOcean/ Heroku - Need to choose

## Programming Languages
1. JavaScript, HTML, CSS, Bootstrap, React
2. Python and Django

Will need *JavaScript, HTML, and CSS* because that's just basic Web Development needs.  Generally will use *Bootstrap* for some specific styling stuff.  *React* for single page rendering mechanics built in for better UI experience.  Skipping *jQuery* because React is enough for specific UI stuff if Bootstrap is not able to handle it - [Django-jQuery setup](https://stackoverflow.com/questions/12031825/how-to-set-up-django-website-with-jquery).  We are skipping *TypeScript* because it's not necessary for this.

We will use *Python* and *Django* for this project because Django is great for blogs.

## Database
We will stick with a Relational Database Management System.  Specifically we will be using *PostgreSQL* due to being free and open source as well as the ability to handle complex data.  We will start out with *SQLite* though to start out with though.

## Webhosting
Using *Nginx* and *Gunicorn* for this because they are compatible with Django Development.

## Cloud Service Provider
Need to choose between:
* GCP - Expensive
* DigitalOcean - Mid Range
* Heroku - Most cheap

Most likely going to choose Heroku due to being cheap and this is mainly for myself.

# References
* https://www.toptal.com/developers/gitignore/api/django,react
* https://www.django-rest-framework.org/
* https://docs.djangoproject.com/en/5.0/topics/serialization/
* [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
* [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
* [Tim's Tutorial](https://www.youtube.com/watch?v=c-QsfbznSXI)
* [Tim's Tutorial Repository](https://github.com/techwithtim/Django-React-Full-Stack-App/tree/main)
