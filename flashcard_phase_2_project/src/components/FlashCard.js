import {CiSquareRemove} from 'react-icons/ci'


function FlashCard({card, onDeleteCard}) {
    
    const {id, title, question, answer, image} = card

    // Delete Card From Server
    function handleDeleteClick() {
        fetch(`http://localhost:8001/card/${id}`, {
            method: "DELETE",
        })
        .then(()=>onDeleteCard(id))
        .catch(err => alert('Failed to Delete Card'))
    }

    return (
        <>
            <div className='myCard' style={{background: '#E7F150'}}>
                <h2 className="front" style={{fontSize: 50}}>{title}</h2>
                <p style={{fontSize: 30}}> {question}</p>
                <h1 className='delete' onClick={handleDeleteClick}><CiSquareRemove /></h1>
            </div>
            <div className='myCard' style={{background: '#1dace6'}}>
                <h2 className="back" >{answer}<img className="image" src={image}/></h2> 
            </div>
        </>

    );
  }



export default FlashCard