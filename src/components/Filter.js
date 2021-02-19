import styled from "styled-components";

const Filters = styled.div`
  background: #f1f1f1;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Filter = ({ dispatchFilter, active }) => {
  const handleShowAll = () => {
    dispatchFilter({ type: "SHOW_ALL" });
  };

  const handleShowComplete = () => {
    dispatchFilter({ type: "SHOW_COMPLETE" });
  };

  const handleShowIncomplete = () => {
    dispatchFilter({ type: "SHOW_INCOMPLETE" });
  };

  return (
    <Filters>
      <span>Show:</span>
      <span
        className={`button ${active === "ALL" ? "active" : ""}`}
        onClick={handleShowAll}
      >
        All
      </span>
      <span
        className={`button ${active === "COMPLETE" ? "active" : ""}`}
        onClick={handleShowComplete}
      >
        Complete
      </span>
      <span
        className={`button ${active === "INCOMPLETE" ? "active" : ""}`}
        onClick={handleShowIncomplete}
      >
        Incomplete
      </span>
    </Filters>
  );
};

export default Filter;
