/* eslint-disable react/prop-types */
function StyledHeading({headingText}) {
  return (
    <h2 className="text-2xl font-medium ps-10 mb-10 relative before:content-[''] before:w-5 before:rounded-md before:h-full before:bg-purple-600 before:absolute before:left-0">
      {headingText}
    </h2>
  );
}

export default StyledHeading;
