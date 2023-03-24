export default function Cart(props){
    return <div className="col-lg-3">
        <div className="col mb-5">
    <div className="card h-100">
        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
        <div className="card-body p-4">
            <div className="text-center">
                <h5 className="fw-bolder">{props.ProductData.name}</h5>
                $40.00 - $80.00
            </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center"><button disabled={props.cartList.some(obj=>obj.id==props.ProductData.id)} className="btn btn-outline-dark mt-auto"  onClick= {()=>props.handleClick(props.ProductData)}>Add to card</button></div>
        </div>
    </div>
</div>
    </div>
    
}