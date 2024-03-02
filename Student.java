
package Model;

import javax.persistence.*;

/**
 *
 * @author m&n Technology G Ltd
 */
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "names")
    private String names;
    @Column(name = "email")
    private String email;
    @Column(name = "password")
    private String password;

    public Student() {
    }

    public Student(Long id, String names, String email, String password) {
        this.id = id;
        this.names = names;
        this.email = email;
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNames() {
        return names;
    }
    public void setNames(String names) {
        this.names = names;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    
}
