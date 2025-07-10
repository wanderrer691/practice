from flask import Flask, jsonify

app = Flask(__name__)


def lcm(a, b):
    from math import gcd
    return abs(a * b) // gcd(a, b)


@app.route("/api/lcm/<int:a>/<int:b>")
def get_lcm(a, b):
    if a == 0 or b == 0:
        return jsonify({"error": "НОК не определяется для нуля."}), 400

    lcm_value = lcm(a, b)
    return jsonify({
        "a": a,
        "b": b,
        "lcm": lcm_value
    })


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
