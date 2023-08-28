import { useState, useContext } from "react"
import { imgContext } from "../../Contexts/ImgContext"
import Box from "../Box/Box"
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

  type outputArrItem = {
    created_at: string,
    data: {regions: region[]},
    id: string,
    input: any,
    model: any,
    status: {code: number, description: string} 
  }

  type respApiType = {
    status: {code: number, description: string, req_id: string},
    outputs: outputArrItem[]
  }

type Props = {
    respApi: respApiType | undefined,
    temErro: boolean,
    detectando: boolean
}


function ImagemRosto({respApi, temErro, detectando}: Props){
    const {img, setImg} = useContext(imgContext)

    return (
        <div className="w-1/2 h-auto relative flex flex-col items-center gap-1">
            {
              detectando && <div className="text-3xl flex justify-center drop-shadow-lg font-bold">Detectando...</div>
            }     
            {
              !temErro &&  <img src={img} alt="" className="w-full h-auto" />
            }
            {
                respApi?.status.description === "Ok" ?
                respApi.outputs[0].data.regions.map(item => <Box width={(item.region_info.bounding_box.right_col - item.region_info.bounding_box.left_col)*100 + "%"} height={(item.region_info.bounding_box.bottom_row - item.region_info.bounding_box.top_row)*100 + "%"} top={(item.region_info.bounding_box.top_row)*100 + "%"} left={(item.region_info.bounding_box.left_col)*100 + "%"}></Box>)
                :
                respApi && <div className="text-3xl font-bold drop-shadow-lg text-center">Tivemos um problema!<br/>Verifique sua internet e a URL digitada, por favor!<br/>A detecção não funcionará caso a url da imagem não seja segura!</div>
            }
        </div>
    )
}

export default ImagemRosto

