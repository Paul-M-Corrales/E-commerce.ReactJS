import React from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";
import { useContext,  useState } from 'react'
import { getFirestore, collection, addDoc } from 'firebase/firestore'


export const Cart = () => {

    const { cart, totalPrice, clearCart} = useContext(CartContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [orderId, setOrderId] = useState('')
    const [canvas, setCanvas] = useState(true)

    const setOrder = () => {
        const buyer = {name:name, email:email, phone:phone};
        const items = [];
        cart.forEach( item => {
            items.push({id:item.id, nombre:item.nombre, precio:item.precio, cantidad:item.quantity, date:new Date()})
        })

        const order = {buyer: buyer, items:items, total:totalPrice()}
        console.log(order);

         const db = getFirestore();
        const orderCollection = collection(db, 'Pedidos');
        addDoc(orderCollection, order).then(data => {
            setOrderId(data.id);
            setCanvas(false)
            console.log('numero de orden: ' + data.id); 
        
        })

        

    }

    if (totalPrice() < 1) {

        return (
            <div className='text-center mt-5'>
                <h2>No hay productos en el Carrito!</h2>
                <Link to='/'><h3>Volver al Inicio</h3></Link>
            </div>
        )
    }

    return (
         <>
            <div className='container py-5 text-center d-flex align-items-center'>
                <div className="row pt-3 contenedorCart">
                    {cart.map((product) => (
                        <ItemCart key={product.id} product={product} />
                    ))}
                    <div className="row pt-3">
                        <div className="col-md-4">
                            <button className='btn btn-warning text-black d-block mx-auto rounded-pill' onClick={() => clearCart()} style={{ boxShadow: "0px 3px 5px #000", fontWeight: '600' }}>Vaciar carrito</button>
                        </div>
                        <div className="col-md-4 h2">
                            <p>Total: <b>${totalPrice()}</b></p>
                        </div>
                        <div className="col-md-4">
                            <button className='btn btn-warning text-black d-block mx-auto rounded-pill' style={{ boxShadow: "0px 3px 5px #000", fontWeight: '600' }} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Finalizar compra</button>
                           
                            {canvas
                            ?
                            <div className="offcanvas offcanvas-end"  id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                <div className="offcanvas-body" >
                                        <h2 className='pt-3 orderTitle'>Orden de compra</h2>
                                    <div className="mb-3 ms-5 ps-3">
                                        
                                        <input type="text" className="form-control  border-0 border-bottom border-dark mt-4 bg-transparent" id="exampleFormControlInput1" placeholder="nombre" required onInput={(e) => setName(e.target.value)}/>
                                        
                                        <input type="email" className="form-control  border-0 border-bottom border-dark mt-4 bg-transparent" id="exampleFormControlInput2" placeholder="email@ejemplo.com" required onInput={(e) => setEmail(e.target.value)}/>
                                        
                                        <input type="tel" className="form-control  border-0 border-bottom border-dark mt-4 bg-transparent" id="exampleFormControlInput3" placeholder="telefono" required onInput={(e) => setPhone(e.target.value)}/>
                                    </div>
                                    <div className="mb-3 text-start pt-2 ms-5 ps-3">
                                        <button type='submit' className='btn btn-dark rounded-pill me-3' onClick={() => 
                                        {setOrder()}} >Finalizar pedido</button>
                                        <button type="button" className="btn btn-dark rounded-pill ms-3" data-bs-dismiss="offcanvas" aria-label="Close">Salir</button>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="offcanvas offcanvas-end"  id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                <div className="offcanvas-body" >   
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-X9oM23h704vzvBbUgf9edYDEdD4gOigrjTvaHDMoupWMgW-VL042UelJM5p15euLdYQ&usqp=CAU" width="150" alt="" />                                
                                        <h2 className='pt-5 orderTitle '>Felicitaciones!!<br/> Su pedido se a realizado con exito</h2>
                                            <h3 className='pt-3 orderSubtitle '> Su numero de orden es: <p className='nOrder mt-4'>'{orderId}'</p></h3>
                                    <div className="mb-3 text-start pt-2 d-flex justify-content-center">
                                    <button type="button" className="btn btn-dark rounded-pill ms-3 mt-" data-bs-dismiss="offcanvas" aria-label="Close" onClick={() => clearCart()}>Salir <i className="fa-solid fa-person-through-window"></i></button>
                                    </div>
                                </div>
                            </div>
                            }
                           
                        </div>
                    </div>
                </div>
            </div>
        </> 

    )
}
export default Cart;