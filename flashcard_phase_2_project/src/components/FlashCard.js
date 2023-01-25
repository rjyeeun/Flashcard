
function FlashCard({card}) {
    


    const {id, title, question, answer, image} = card

    return (
        <>
            <div className='myCard' style={{background: '#E7F150'}}>
                <h2 className="front" style={{fontSize: 50}}>{title}</h2>
                    <p style={{fontSize: 30}}> {question}</p>
                
            </div>
            <div className='myCard' style={{background: '#1dace6'}}>
                <h2 className="back" >{answer}<img className="image" src={image}/></h2> 
            </div>
        </>

    );
  }



export default FlashCard