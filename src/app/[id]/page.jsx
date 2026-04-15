const CardDetails = async({ params }) => {
  const { id } = await params;
//   const res  =  await fetch(`http://localhost:3000/friends.json/${id}`)
    // const user = await res.json();
  console.log(id);

  return (
    <div>
      hello
    </div>
  );
};

export default CardDetails;