
function FlashCard({card}) {
    


    const {id, title, question, answer, image} = card

    return (
        <>
            <div className='myCard' style={{background: '#26d83e'}}>
                <h2 className="front" style={{fontSize: 50}}>{title}</h2>
                    <p style={{fontSize: 30}}> {question}</p>
                
            </div>
            <div className='myCard' style={{background: '#ff69b4'}}>
                <h2 className="back" >{answer}<img className="image" src={image}/></h2> 
            </div>
        </>

    );
  }



export default FlashCard