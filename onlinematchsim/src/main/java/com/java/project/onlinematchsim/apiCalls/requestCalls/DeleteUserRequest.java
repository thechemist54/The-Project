package com.java.project.onlinematchsim.apiCalls.requestCalls;

import javax.validation.constraints.*;
public class DeleteUserRequest {
	
	@NotBlank
	private String id;
	
	
	

	
	

	public DeleteUserRequest(@NotBlank String id) {
		super();
		 setId(id);
		 this.id=getId();
		
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
	
	
}
