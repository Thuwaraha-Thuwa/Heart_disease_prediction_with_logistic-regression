from fastapi import FastAPI, HTTPException
import uvicorn
from pydantic import BaseModel
import numpy as np
import pickle
import warnings
from sklearn.exceptions import InconsistentVersionWarning

warnings.filterwarnings("ignore", category=InconsistentVersionWarning)


from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins; for production, specify trusted origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods
    allow_headers=["*"],  # Allows all headers
)

# Load the model
try:
    with open('D:/Thuwa Eruma maadu/Heart Diseses Prediction/Backend/model.pkl', 'rb') as file:
        model = pickle.load(file)
except FileNotFoundError:
    raise RuntimeError("Model file not found. Please ensure 'model.pkl' exists in the specified path.")


# Define the input schema
class PredictionRequest(BaseModel):
    attribute1: float
    attribute2: float
    attribute3: float
    attribute4: float
    attribute5: float
    attribute6: float
    attribute7: float
    attribute8: float
    attribute9: float
    attribute10: float
    attribute11: float
    attribute12: float
    attribute13: float




# API endpoint to handle predictions
@app.post("/predict")
async def predict(request: PredictionRequest):
    try:
        # Convert input data to numpy array
        input_data = np.array([[request.attribute1, request.attribute2, request.attribute3,
                                request.attribute4, request.attribute5, request.attribute6,
                                request.attribute7, request.attribute8, request.attribute9,
                                request.attribute10, request.attribute11, request.attribute12,
                                request.attribute13]])
        
        # Run prediction
        prediction = model.predict(input_data)
        
        # Convert prediction to a readable response
        result = "Positive" if prediction[0] == 1 else "Negative"

        # Return the prediction result
        return {"prediction": result}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")
    



# Root endpoint for testing
@app.get("/")
async def root():
    return {"message": "Cancer Prediction API is running!"}


if __name__=="__main__":
   uvicorn.run(app,port=8000)