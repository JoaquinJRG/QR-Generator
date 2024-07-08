from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import base64
import qrcode
from io import BytesIO

origins = [
  "http://localhost:5173",
  "https://qr-generator-nine-zeta.vercel.app"
]

app = FastAPI()

app.add_middleware(
  CORSMiddleware,
  allow_origins=origins,
  allow_credentials=True, 
  allow_methods=["*"],
  allow_headers=["*"]
)

@app.get("/")
async def root():
  return "API para generar códigos QR"

@app.get("/qrSvg/")
async def qr(url: str):
  return

@app.get("/qr64")
async def qr64(url: str = "http://example.com", color: str = "black"):

  try:
    qr = qrcode.QRCode(
      version=1,
      error_correction=qrcode.constants.ERROR_CORRECT_L,
      box_size=10,
      border=4
    )

    #Creo imagen qr
    qr.add_data(url)
    qr.make(fit=True)
    img = qr.make_image(fill_color=color, back_color="white")

    #Guardo la imagen en el buffer y lo devuelvo en base 64
    buffer = BytesIO()
    img.save(buffer, format="PNG")
    img_bin = buffer.getvalue()
    return {"qrBase64": base64.b64encode(img_bin)}
  
  except Exception as e:
    raise HTTPException(status_code=500, detail=str(e))
