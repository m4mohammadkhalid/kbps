import Category from '../../../components/Crud/Category';
import Tag from '../../../components/Crud/Tag';

const CategoryTag = () => {
    return (
        
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Manage Categories and Tags</h2>
                        </div>
                        <div className="col-md-6">
                            <Category />
                        </div>
                        <div className="col-md-6">
                            <Tag />                           
                        </div>
                    </div>
                </div>
            
    );
};

export default CategoryTag;
