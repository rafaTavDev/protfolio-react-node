import { useState, useEffect } from 'react'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import Rank from './components/Rank/Rank'
import Input from "./components/Input/Input"
import ParticlesBg from 'particles-bg'
import ImagemRosto from './components/ImagemRosto/ImagemRosto'
import { ImgContextProvider } from './Contexts/ImgContext'

function App() {

  type region = {
    data: any,
    id: string, 
    region_info: {
      bounding_box: {
        top_row: number, left_col: number, bottom_row: number, right_col: number
      }
    },
    value: number
  }

  type respApiType = {
    status: {code: number, description: string, req_id: string},
    outputs: [{
      created_at: string,
      data: {regions: region[]},
      id: string,
      input: any,
      model: any,
      status: {code: number, description: string} 
    }]
  }

  const [urlImg, setUrlImg] = useState<string>("")
  const [respApi, setRespApi] = useState<respApiType | undefined>()
  const [erro, setErro] = useState<boolean>(false)
  const [detectando, setDetectando] = useState<boolean>(false)

  function pegarUrl(url: string){
    setUrlImg(url)
  }

  useEffect(() => {
    console.log(respApi)
  }, [respApi])



  console.log(respApi)


  function reqUrl(img: string){

    setDetectando(true)
    setRespApi(undefined) /* some com as caixas azuis da requisição anterior enquanto a requisição atual não termina */
      

    const PAT = '2c13b284b50a4a359c52a21d2cb18b3f';
    const USER_ID = 'lfy7y3a2okah';       
    const APP_ID = 'face-detection-portif';
    const MODEL_ID = 'face-detection';
    const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';    
    const IMAGE_URL = img;

    const raw = JSON.stringify({
        "user_app_id": {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        "inputs": [
            {
                "data": {
                    "image": {
                        "url": IMAGE_URL
                    }
                }
            }
        ]
    });

    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + PAT
        },
        body: raw
    };

    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
        .then(response => response.json())
        .then(result => {setRespApi(result); setDetectando(false)})
        .catch(error => {setErro(true); setDetectando(false)});
  }






  return (
    <div className='min-h-screen text-white relative'>
      <ParticlesBg type='cobweb' bg={true} color="#ffffff"/>
      <Navigation />
      <Logo />
      <div className='flex flex-col items-center gap-8 py-4'>
        <Rank />
        <ImgContextProvider>
          <Input fnUrl={pegarUrl} fnReq={reqUrl} />
          <ImagemRosto respApi={respApi} temErro={erro} detectando={detectando} />
        </ImgContextProvider>
      </div>
      <div className='bg-gradient-to-r from-purple-500 to-pink-500 absolute inset-0 -z-10'></div>
    </div>
  )
}

export default App



/*
Dúvidas:
No catch do fetch eu só peço pra ele setar o erro como true, mas ele está mudando automaticamente o meu state respApi também, pq isso acontece se eu não to mandando? Tipo, até tudo bem ele retornar mas pq tá mudando? Será que é pq essa API foi configurada de forma que o erro não deságua no catch mas sim em um retorno, ou seja, se retornou algo é pq a requisição em si funcionou, logo o catch não vai ser executado?
*/
