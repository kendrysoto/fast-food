import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setFood, setPeople, setQuantity } from '../redux/actions';
import styled from 'styled-components';

const Pollo = ({ pollo, setFood, setPeople, setQuantity, people, quantity, food, }) => {

    const Input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color:#3A6073;
    background: #FFEEEE;
    border: none;
    border-radius: 3px;
  `;
    const Button = styled.button`
    background:  #FFE000;
    color: #fff;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #fff;
    border-radius: 4px;
  `;
    const Title = styled.h1`
    font-size: 2.5em;
    text-align: justify;
    color: #FFEEEE;
  `;
    const Container1 = styled.div`
    padding: 3em;
    background: #b92b27;
    padding-left: 50em;
  `;
    const Label = styled.label`
  text-align: center;
  color:#FFEEEE;
  `;
    const Img = styled.img`
  width: 700px;
  height: 445px;
  
  `;
    const Container2 = styled.div`
  width: 700px;
  height: 360px;
  background: #fff;
  float:left;
  `;
    return (
        <div>
            <Container2>
                <Img src={pollo.image} alt={pollo.image} />
            </Container2>

            <Container1 >
                <Title>{pollo.name}</Title>
                <div>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            setQuantity();
                        }}>
                        <div>
                            <Label  >
                                Número de personas que comerán pollo  <br></br>
                                <Input
                                    type='number'
                                    name='personas'
                                    onChange={(event) => {
                                        setPeople(event.target.value);
                                    }}
                                    value={people}
                                />
                            </Label>
                        </div>
                        <div >
                            <Label for='pollo'>
                                Cantidad de porciones que cada persona comerá
                                 <Input
                                    type='number'
                                    name='pollo'
                                    onChange={(event) => {
                                        setFood(event.target.value);
                                    }}
                                    value={food}
                                />
                            </Label>
                        </div>

                        <div>
                            <Button
                                type='submit'
                                onClick={setQuantity}
                            >
                                Calcular pollos
                             </Button>
                        </div>
                    </form>

                    <Label >
                        La cantidad de pollos que necesita comprar son: {quantity}
                    </Label>
                </div>
                <div>
                    <Link to={`/pollos/`}>
                        <Button >volver</Button>
                    </Link>
                </div>
            </Container1>
        </div>
    );
};

const mapStatetoProps = (state) => {
    return{
    people: state.people,
    quantity: state.quantity,
    food: state.food,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setPeople(value) {
            dispatch(setPeople(value));
        },
        setFood(value) {
            dispatch(setFood(value));
        },
        setQuantity() {
            dispatch(setQuantity());
        },
    };
};

export default connect(mapStatetoProps, mapDispatchToProps)(Pollo);