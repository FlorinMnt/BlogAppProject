package BlogApp.blog_app.Entity;
import org.hibernate.annotations.Type;
import jakarta.persistence.*;

@Entity
public class BlogPost {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private String text;
    @Lob
//    @Type(type = "org.hibernate.type.ImageType")
    private byte[] image;

    public BlogPost(){}
    public BlogPost(String _title,String _text, byte[] _image){
        this.title = _title;
        this.text = _text;
        this.image = _image;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }
    public void setId(Long _id){
        this.id = _id;
    }
    public Long getId(){
        return id;
    }

    public void setTitle(String _title){
        this.title = _title;
    }
    public String getTitle(){
        return title;
    }

    public void setText(String _text){
        this.text = _text;
    }
    public String getText(){
        return text;
    }

}
