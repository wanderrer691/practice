FROM python:3.12-alpine
WORKDIR /HOK_REST_API
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY app.py .
EXPOSE 8080
CMD ["python", "app.py"]