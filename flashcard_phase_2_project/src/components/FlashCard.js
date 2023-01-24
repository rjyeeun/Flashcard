function FlashCard({card}) {
    
    const {id, title, question, answer, image} = card

    return (
        <div className='container'  >
            <div className='card'>
                <h2 className="front">{title}
                 <div> {question}</div>
                  </h2>
                <h2 className="back">{answer}<img src={image}/></h2> 
            </div>
        </div>
    );
  }



export default FlashCard