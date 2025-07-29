import PropTypes from 'prop-types'

function Container({children}) {
  return (
<div className="card" style={{width: "70%"}}>
  <div className="card-body">
    {children}
  </div>
</div>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired
}

export default Container
