// Card.js
function Card({ image, title, description, tags, onClick, linkText }) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        {description && <p className="card-description">{description}</p>}
        {tags && (
          <div className="card-tags">
            {tags.map((tag, i) => <span className="card-tag" key={i}>{tag}</span>)}
          </div>
        )}
        {linkText && <span className="card-link">{linkText}</span>}
      </div>
    </div>
  );
}
