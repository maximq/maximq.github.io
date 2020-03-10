function Day() {
    var d0 = new Date('April 9, 2019');
    var d1 = new Date();
    var dt = Math.round((d1.getTime() - d0.getTime()) / (1000*60*60*24));
    return <b>{dt}-й день</b>
}
ReactDOM.render(<Day />, document.getElementById('days'));
