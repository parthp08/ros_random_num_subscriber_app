from flask import Flask, render_template
import webbrowser, os
from threading import Timer

app = Flask(__name__, template_folder='./')  # reference


@app.route('/')
def index():
    return render_template('index.html')

def main():
    
    # The reloader has not yet run - open the browser
    if not os.environ.get("WERKZEUG_RUN_MAIN"):
        webbrowser.open_new('http://127.0.0.1:2000/')

    # Otherwise, continue as normal
    app.run(host="127.0.0.1", port=2000)

if __name__ == '__main__':
    main()
    