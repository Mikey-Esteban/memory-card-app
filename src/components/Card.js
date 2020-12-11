import React from 'react'

const Card = ({src, id, onClick}) => {

  const mouseEnterHandler = event => {
    let target;
    event.target.classList.contains('card-container') ?
      target = event.target :
      target = event.target.parentNode;

    target.style = 'cursor: pointer; transform: scale(1.1);'
  }

  const mouseLeaveHandler = event => {
    let target;
    event.target.classList.contains('card-container') ?
      target = event.target :
      target = event.target.parentNode;

    target.style = 'transform: scale(1);'
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden card-container"
      id={id}>
      <img className="h-96 min-w-full" src={src} alt=""
        onClick={ () => onClick(id) }
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler} />
      <div className="p-6">
        <h4 className="text-gray-600">Beautiful shots by
          <a className="text-red-300" href="https://unsplash.com/@heysupersimi"> Simone Hutsch</a>
        </h4>
        <h4 className="text-xs text-gray-300">&copy; Simone Hutsch</h4>
      </div>
    </div>
  )
}

export default Card
