const mobileOffCanvas = ({ condition, wrap, children }) => (
    condition ? wrap(children) : children
)