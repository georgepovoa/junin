import Email from "./Input-fields/Email"
import { MainDiv } from "./styled-components/StyledForm"
import { CheckboxContainer } from "./styled-components/xuxuComponents";
import { useState } from "react";
import { flightOffersExample } from "../api/api";
import SelectAeroporto from "./Input-fields/SelectAeroporto";
import InputData from "./Input-fields/DataField";




function Home() {


    const [dataEspecifica, setDataEspecifica] = useState(true);
    const [SoIda, setSoIda] = useState(false);

    function onSoIdaChange() {

        setSoIda(!SoIda)
    }

    // ainda não existe lógica para datas não específicas, pode/deve ser retirado caso não tenha solução
    function ChangeDataEspecifica() {
        setDataEspecifica(!dataEspecifica)
    }



    function SubmitForm(event) {

        event.preventDefault();


        var originIdFrom = ""
        var destinationIdFrom = ""
        var departureDateFrom = ""
        var originIdBack = ""
        var destinationIdBack = ""
        var departureDateBack = ""

        for (let index = 0; index < event.target.length; index++) {

            const inputValue = event.target[index].value;
            const inputName = event.target[index].name;


            if ("originIdFrom" === inputName) {
                originIdFrom = inputValue
            }
            else if ("destinationIdFrom" === inputName) {
                destinationIdFrom = inputValue
            }
            else if ("departureDateFrom" === inputName) {
                departureDateFrom = inputValue
            }
            else if ("originIdBack" === inputName) {
                originIdBack = inputValue
            }
            else if ("destinationIdBack" === inputName) {
                destinationIdBack = inputValue
            }
            else if ("departureDateBack" === inputName) {
                departureDateBack = inputValue

            }

        }

        // lógica para só ida -> origemIdBack e destinationIdBack permanecem = ""
        if (!SoIda) {
            originIdBack = destinationIdFrom
            destinationIdBack = originIdFrom
        }

        flightOffersExample(originIdFrom,
            destinationIdFrom,
            departureDateFrom,
            originIdBack,
            destinationIdBack,
            departureDateBack)

    }




    return (
        <form onSubmit={e => SubmitForm(e)}>
            <MainDiv>

                <Email name="email" />

                <h1>Origem</h1>
                <SelectAeroporto name="originIdFrom" placeholder={"Selecione sua origem"} required></SelectAeroporto>

                <h1>Destino</h1>
                <SelectAeroporto name="destinationIdFrom" placeholder={"Selecione seu destino"} required></SelectAeroporto>

                <CheckboxContainer>
                    {/* ainda não existe lógica para somente idas não específicas, pode/deve ser retirado caso não tenha solução */}
                    <input onChange={e => { onSoIdaChange(e.target.value) }} value={SoIda} type="checkbox" name="so-ida" disabled /><p>Só ida</p>
                </CheckboxContainer>

                <CheckboxContainer>
                    <input type="checkbox" onChange={e => ChangeDataEspecifica()} name="data-especifica" value={true} checked disabled /> <p>Prefiro datas específicas</p>
                </CheckboxContainer>

                {/* lógica para mostrar campo de datas somente quando o checkbox data especifica estiver selecionado */}
                {dataEspecifica ?
                    (
                        <>
                        <h1>Informe as datas e a duração da sua viagem</h1>

                            <InputData type="date" name="departureDateFrom" title={"Data de ida"} />

                            <InputData name="departureDateBack" title={"Data de volta"} />

                        </>) :
                    <>
                        <select name="data-range">
                            <option disabled selected>Select your option</option>
                            <option value="1">1</option>
                            <option value="15">15</option>
                            <option value="30">30</option>
                        </select>
                    </>}

                <br></br>
                
                <button>Enviar</button>

            </MainDiv>
        </form>
    )
}

export default Home