"""create user table

Revision ID: cf96d12c6f53
Revises: 
Create Date: 2020-11-26 07:35:36.318707

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'cf96d12c6f53'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        'user',
        sa.Column('id', sa.Integer, primary_key=True, unique=True),
        sa.Column('username', sa.String(100), unique=True),
        sa.Column('hashed_password', sa.String(100)),
        sa.Column('email', sa.String(200)),
        sa.Column('is_active', sa.Boolean),
        sa.Column('created_date', sa.DateTime),
    )


def downgrade():
    pass
