

// (function($){

// 	$.fn.ChangPostionSpan = function(){

// 		$("span").hover(function(){

// 	 	var MarginTop = parseInt($(this).css("margin-top"),10);
// 	 	var MarginLeft = parseInt($(this).css("margin-left"),10);
// 	 	var ElementId = "#" + $(this).attr("id");

	 	 
// 		 //$("piecesHover").addClass({"background-color": "yellow"});
// 		 MarginTop = MarginTop- 5;
// 		 MarginLeft = MarginLeft + 5;

// 		// alert(MarginTop);
// 		// alert(MarginLeft);
// 		// alert(ElementId);
// 		 $(ElementId).css({"margin-top" : MarginTop + "px"});
// 		// alert($(this.id).css("margin-top"));
// 		 $(ElementId).css({"margin-left" : MarginLeft + "px" });       //fix the position 
// 	 	 $(this).addClass("piecesHover");

// 	};

// })(jQuery);

//2d array init to be used later when creating different sized tables
				function createTable(size){
					var counter = 0;
					var table1 = new Array[size+2, size+2];
					
					
					for(var i = 0; i < size+2; i++){
						//table1[0][i] = 0;
					}
					
				}
				
				function checkWin(table){
					var flag = "-"
					for(var i = 0; i< table.length; i++){
						for(var j = 0; j< table.length; j++){
							
							var onelefti = i - 1;
							var twolefti = i - 2;
							var threelefti = i - 3;
							var count = 0;
							//check LEFT white
							if(table[i][j] == "w" && table[i][j]!= 0){
								if(table[onelefti][j] == "w" && table[onelefti][j]!= 0){
									if(table[twolefti][j] == "w" && table[twolefti][j]!= 0){
										
										$('#flagid').text("White played 3 in a row. Black wins!")
										
										
										if(table[threelefti][j] == "w" && table[threelefti][j]!= 0){
										$('#flagid').text("White player WON by playing 4 in a row!")
										
									
							
									}		
							
									}			
								}
							}
							//check RIGHT white
							if(table[i][j] == "w" && table[i][j]!= 0){
								if(table[i + 1][j] == "w" && table[i + 1][j]!= 0){
									if(table[i + 2][j] == "w" && table[i + 2][j]!= 0){
										 $('#flagid').text("White played 3 in a row. Black wins!")
										
										
										
										if(table[i + 3][j] == "w" && table[i + 3][j]!= 0){
										$('#flagid').text("White player WON by playing 4 in a row!")
										
							
									}		
							
									}			
								}
							}
							//check LEFT black
							if(table[i][j] == "b" && table[i][j]!= 0){
								if(table[onelefti][j] == "b" && table[onelefti][j]!= 0){
									if(table[twolefti][j] == "b" && table[twolefti][j]!= 0){
										$('#flagid').text("Black played 3 in a row. White wins!");
									
										
										if(table[threelefti][j] == "b" && table[threelefti][j]!= 0){
										$('#flagid').text("Black player WON by playing 4 in a row!");
										
							
									}		
							
									}			
								}
							}
							//check RIGHT black
							if(table[i][j] == "b" && table[i][j]!= 0){
								if(table[i + 1][j] == "b" && table[i + 1][j]!= 0){
									if(table[i + 2][j] == "b" && table[i + 2][j]!= 0){
										$('#flagid').text("Black played 3 in a row. White wins!");
										
										
										if(table[i + 3][j] == "b" && table[i + 3][j]!= 0){
										$('#flagid').text("Black player WON by playing 4 in a row!");
										
							
									}		
							
									}			
								}
							}
							
							/////DIAGONALS
							
							//check UP LEFT black
							if(table[i][j] == "b" && table[i][j]!= 0){
								if(table[i][j -1] == "b" && table[i][j-1]!= 0){
									if(table[i][j-2] == "b" && table[i][j-2]!= 0){
										$('#flagid').text("Black played 3 in a row. White wins!");
										
										
										if(table[i][j-3] == "b" && table[i][j-3]!= 0){
										$('#flagid').text("Black player WON by playing 4 in a row!");
										
							
									}		
							
									}			
								}
							}
							
							//check UP LEFT white
							if(table[i][j] == "w" && table[i][j]!= 0){
								if(table[i][j -1] == "w" && table[i][j-1]!= 0){
									if(table[i][j-2] == "w" && table[i][j-2]!= 0){
										$('#flagid').text("White played 3 in a row. Black wins!");
										
										
										if(table[i][j-3] == "w" && table[i][j-3]!= 0){
										$('#flagid').text("White player WON by playing 4 in a row!");
										
							
									}		
							
									}			
								}
							}
							
							//check UP RIGHT white
							if(table[i][j] == "w" && table[i][j]!= 0){
								if(table[i+1][j -1] == "w" && table[i+1][j-1]!= 0){
									if(table[i+2][j-2] == "w" && table[i+2][j-2]!= 0){
										$('#flagid').text("White played 3 in a row. Black wins!");
										
										
										if(table[i+3][j-3] == "w" && table[i+3][j-3]!= 0){
										$('#flagid').text("White player WON by playing 4 in a row!");
										
							
									}		
							
									}			
								}
							}
							
							//check UP RIGHT black
							if(table[i][j] == "b" && table[i][j]!= 0){
								if(table[i+1][j -1] == "b" && table[i+1][j-1]!= 0){
									if(table[i+2][j-2] == "b" && table[i+2][j-2]!= 0){
										$('#flagid').text("Black played 3 in a row. WIns wins!");
										
										
										if(table[i+3][j-3] == "b" && table[i+3][j-3]!= 0){
										$('#flagid').text("Black player WON by playing 4 in a row!");
										
							
									}		
							
									}			
								}
							}
							
							//check DOWN LEFT white
							if(table[i][j] == "w" && table[i][j]!= 0){
								if(table[i-1][j +1] == "w" && table[i-1][j+1]!= 0){
									if(table[i-2][j+2] == "w" && table[i-2][j+2]!= 0){
										$('#flagid').text("White played 3 in a row. Black wins!");
										
										
										if(table[i-3][j+3] == "w" && table[i-3][j+3]!= 0){
										$('#flagid').text("White player WON by playing 4 in a row!");
										
							
									}		
							
									}			
								}
							}
							
							//check DOWN LEFT black
							if(table[i][j] == "b" && table[i][j]!= 0){
								if(table[i-1][j +1] == "b" && table[i-1][j+1]!= 0){
									if(table[i-2][j+2] == "b" && table[i-2][j+2]!= 0){
										$('#flagid').text("Black played 3 in a row. White wins!");
										
										
										if(table[i-3][j+3] == "b" && table[i-3][j+3]!= 0){
										$('#flagid').text("Black player WON by playing 4 in a row!");
										
							
									}		
							
									}			
								}
							}
							
							//check DOWN RIGHT black
							if(table[i][j] == "b" && table[i][j]!= 0){
								if(table[i][j +1] == "b" && table[i][j+1]!= 0){
									if(table[i][j+2] == "b" && table[i][j+2]!= 0){
										$('#flagid').text("Black played 3 in a row. White wins!");
										
										
										if(table[i][j+3] == "b" && table[i][j+3]!= 0){
										$('#flagid').text("Black player WON by playing 4 in a row!");
										
							
									}		
							
									}			
								}
							}
							//check DOWN RIGHT white
							if(table[i][j] == "w" && table[i][j]!= 0){
								if(table[i][j +1] == "w" && table[i][j+1]!= 0){
									if(table[i][j+2] == "w" && table[i][j+2]!= 0){
										$('#flagid').text("White played 3 in a row. Black wins!");
										
										
										if(table[i][j+3] == "w" && table[i][j+3]!= 0){
										$('#flagid').text("White player WON by playing 4 in a row!");
										
							
									}		
							
									}			
								}
							}
							
							
						
						
						
						
						
					}
					}
					
					//set text to flag
					$('flagid').replaceWith(flag);
				}
				

				
			function createHardcodedTable(){
				//hardcoded table
				var table =new Array(11);
				for(var i = 0; i < 11; i++){
					table[i] = new Array(11);
					
				}
				
				for(var i = 0; i < 11; i++){
					for(var j = 0; j < 11; j++){
					
					table[i][j] = 1;
					}	
				}
				//console.log("this " + table[5][5]);
				
				
				for(var i = 0; i < 11; i++){
					table[i][0] = 0;
					table[i][10] = 0;
					table[0][i] = 0;
					table[10][i] = 0;
				}

				
				
				table[1][1] = 0;
				table[2][1] = 0;
				table[3][1] = 0;
				table[4][1] = 0;
				
				table[1][2] = 0;
				table[2][2] = 0;
				table[3][2] = 0;
				
				table[1][3] = 0;
				table[2][3] = 0;
				
				table[1][4] = 0;
				
				table[9][6] = 0;
				
				table[8][7] = 0;
				table[9][7] = 0;
				
				table[7][8] = 0;
				table[8][8] = 0;
				table[9][8] = 0;
				
				table[6][9] = 0;
				table[7][9] = 0;
				table[8][9] = 0;
				table[9][9] = 0;
				
				return table;
			}
				//console.log("this2 lol " + table[5][5]);
				
				
				table = createHardcodedTable();
				

$(document).ready(function(){
			var CoutTwo = 0;


		 	$("span").hover(function(){

		 	$(this).addClass("piecesHover");	

		 	});
	
			$("#TwoPlayer").click(function(){


			$("span").one("click",function(){
				
				

				if(CoutTwo == 0)
				{
				
				$(this).append("<span class='piecesWhite'></span");
				table[this.getAttribute("value")[1]][this.getAttribute("value")[4]] = "w";
				
				  // use appent to fix the position
			      CoutTwo = 1; 
			    }

			    else if(CoutTwo == 1)
			    {
				
				$(this).append("<span class='piecesBlack'></span");
				table[this.getAttribute("value")[1]][this.getAttribute("value")[4]] = "b";
			      CoutTwo = 0; 
			    }
				checkWin(table);

			})
			});
			$("#ThreePlayer").click(function(){

				$("span").one("click",function(){

				if(CoutTwo == 0)
				{
				
				$(this).append("<span class='piecesWhite'></span");
				  // use appent to fix the position
			      CoutTwo = 1; 
			    }

			    else if(CoutTwo == 1)
			    {
				
				$(this).append("<span class='piecesBlack'></span");
			      CoutTwo = 2; 
			    }

			    else if (CoutTwo == 2)
			    {
				
				$(this).append("<span class='piecesGrey'></span");
			      CoutTwo = 0; 

			    }

			});

			});

// refresh the page 
			$("#reset").click(function(){
				table = createHardcodedTable();
				$('#flagid').text("-");
				location.reload();

			});


   });

