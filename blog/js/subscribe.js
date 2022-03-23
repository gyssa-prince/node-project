const Subscribers = document.querySelector('#tb2');

var tbody1 = document.getElementById('tb2');

                            function AddItemTotable1(doc){
                                let trow = document.createElement("tr");
                                let td1 = document.createElement('td');
                                let td2 = document.createElement('td');

                                td1.innerHTML=doc.date;
                                td2.innerHTML= doc.Email;

                                trow.appendChild(td1);
                                trow.appendChild(td2);

                                tbody1.appendChild(trow);

                            }fetch('https://gyssablog.herokuapp.com/subcribe',{method: "GET",
                            headers:{
                                'Content-Type': 'application/json',
                                'auth-token':localStorage.getItem("auth-token") 
                            }}).then((data)=>{

                                return data.json();
                                }).then((completedata)=>{
                                    for(let i=0;i<completedata.length;i++){
                                        AddItemTotable1(completedata[i]);
                                }
                                }).catch((err)=>{
                                    console.log(err);
                                })