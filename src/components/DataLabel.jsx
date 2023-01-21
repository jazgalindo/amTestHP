const DataLabel = ({ data, content }) => {
    return (
      <p className="data-label">
        <strong>{`${data}: `}</strong>
        {content}
      </p>
    )
}

export default DataLabel;