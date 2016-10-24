import os.path
from bottle import default_app, route, static_file, get, post, request

bottle_app_dir = os.path.dirname(os.path.abspath(__file__))

@route('/')
def main_page():
    return static_file("index.html", root=bottle_app_dir)

@route('/favicon.ico')
def favicon():
    return static_file("static/favicon.ico", root=bottle_app_dir)

application = default_app()

