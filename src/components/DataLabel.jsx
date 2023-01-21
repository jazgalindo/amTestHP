const DataLabel = ({ data, content }) => {
    return (
      <p className="data-label">
        <strong>{`${data}: `}</strong>
        {content || 'Desconocido'}
      </p>
    )
}

export default DataLabel;