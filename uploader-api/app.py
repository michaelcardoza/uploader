import os
import shortuuid

from flask import Flask
from flask import jsonify, request, send_from_directory
from flask_cors import CORS
from werkzeug.utils import secure_filename

UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

CORS(app)


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/api/uploads', methods=['POST'])
def upload():
    data = {
        'error': {}
    }

    if 'image' not in request.files:
        data['error']['message'] = 'No image'
        return jsonify(data)

    image = request.files['image']
    if image.filename == '':
        data['error']['message'] = 'No selected image'
        return jsonify(data)

    if image and allowed_file(image.filename):
        filename = secure_filename(image.filename)
        filename = "{}.{}".format(shortuuid.uuid(), filename.split('.')[-1])
        image.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

        data['image'] = filename
        return jsonify(data)
    else:
        data['error']['message'] = 'error'
        return jsonify(data)


@app.route('/media/<string:name>', methods=['GET'])
def media(name):
    return send_from_directory(app.config['UPLOAD_FOLDER'], name)


if __name__ == '__main__':
    app.run()
