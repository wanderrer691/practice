FROM python:3.12-alpine
WORKDIR /REST_API
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 5000
CMD [ "python", "app.py"]
